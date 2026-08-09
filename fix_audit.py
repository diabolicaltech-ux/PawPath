import re

filepath = '/home/team/shared/implementation_v1/src/data/breeds.ts'
with open(filepath, 'r') as f:
    content = f.read()

# 1. Fix "American Bull Dog" → "American Bulldog" - already done
# 2. Dobermann removal - already done
# 3. Doberman Pinscher merger - already done

# 4. Duplicate Hip Dysplasia in Akita (lines 175-180 approx)
# The second Hip Dysplasia entry in Akita:
#         {\n          "condition": "Hip Dysplasia",\n          "onsetAgeMonths": 18,\n          "severity": 2,\n          "screening": "OFA scoring"\n        },
# After Osteosarcoma entry, before Hypothyroidism entry
old_akita_hd = '''        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }'''
new_akita = '''        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }'''
content = content.replace(old_akita_hd, new_akita)
print("Fixed Akita duplicate Hip Dysplasia")

# 5. Alaskan Malamute - find the duplicate Hip Dysplasia
# First, let's find the Alaskan Malamute section
# Look for the second Hip Dysplasia entry by checking between sections
# Alaskan Malamute is at line 243 (after the rename and Dobermann removal)
# Let's find the pattern
am_pattern = r'"name": "Alaskan Malamute"[^}]*?predispositions": \[(.*?)\]'
am_match = re.search(am_pattern, content, re.DOTALL)
if am_match:
    preds = am_match.group(1)
    # Count Hip Dysplasia occurrences
    hd_count = len(re.findall(r'"condition": "Hip Dysplasia"', preds))
    print(f"Alaskan Malamute has {hd_count} Hip Dysplasia entries")
    if hd_count > 1:
        # Find the second occurrence - remove it
        # Split by patterns and remove the duplicate
        # Find the second Hip Dysplasia
        parts = preds.split('"condition": "Hip Dysplasia"')
        if len(parts) >= 3:
            # We have at least 2 occurrences
            # Find the block of the second one
            # The second occurrence starts after the first
            second_start = preds.index('"condition": "Hip Dysplasia"', 
                preds.index('"condition": "Hip Dysplasia"') + 1) - 1  # go back to find the {
            # Go back to find the opening {
            before_second = preds[:second_start]
            brace_start = before_second.rfind('{')
            if brace_start >= 0:
                # Find the closing }
                after_second = preds[second_start:]
                depth = 0
                end_pos = 0
                for i, c in enumerate(after_second):
                    if c == '{': depth += 1
                    if c == '}':
                        depth -= 1
                        if depth == 0:
                            end_pos = i + 1
                            break
                if end_pos > 0:
                    # Remove the block plus the preceeding comma
                    block = preds[brace_start:brace_start + end_pos]
                    # Check if there's a comma before
                    before = preds[:brace_start].rstrip()
                    if before.endswith(','):
                        block = ',' + block
                        brace_start -= 1
                    elif preds[brace_start + end_pos:brace_start + end_pos + 1] == ',':
                        end_pos += 1
                    
                    new_preds = preds[:brace_start] + preds[brace_start + end_pos:]
                    # Replace in content
                    old_full = f'"name": "Alaskan Malamute"[^}}]*?predispositions": [\\[].*?[\\]]'
                    content = content.replace(
                        f'"predispositions": [{preds}]',
                        f'"predispositions": [{new_preds}]'
                    )
                    print("Fixed Alaskan Malamute duplicate Hip Dysplasia")

# 6. Chow Chow - find and fix
cc_pattern = r'"name": "Chow Chow"[^}]*?predispositions": \[(.*?)\]'
cc_match = re.search(cc_pattern, content, re.DOTALL)
if cc_match:
    preds = cc_match.group(1)
    hd_count = len(re.findall(r'"condition": "Hip Dysplasia"', preds))
    print(f"Chow Chow has {hd_count} Hip Dysplasia entries")
    if hd_count > 1:
        # Remove second occurrence
        parts = preds.split('"condition": "Hip Dysplasia"')
        if len(parts) >= 3:
            second_start = preds.index('"condition": "Hip Dysplasia"', 
                preds.index('"condition": "Hip Dysplasia"') + 1) - 1
            before_second = preds[:second_start]
            brace_start = before_second.rfind('{')
            if brace_start >= 0:
                after_second = preds[second_start:]
                depth = 0
                end_pos = 0
                for i, c in enumerate(after_second):
                    if c == '{': depth += 1
                    if c == '}':
                        depth -= 1
                        if depth == 0:
                            end_pos = i + 1
                            break
                if end_pos > 0:
                    before = preds[:brace_start].rstrip()
                    if before.endswith(','):
                        brace_start -= 1
                    new_preds = preds[:brace_start] + preds[brace_start + end_pos:]
                    content = content.replace(
                        f'"predispositions": [{preds}]',
                        f'"predispositions": [{new_preds}]'
                    )
                    print("Fixed Chow Chow duplicate Hip Dysplasia")

# 7. Maine Coon - duplicate Obesity
mc_pattern = r'"name": "Maine Coon"[^}]*?predispositions": \[(.*?)\]'
mc_match = re.search(mc_pattern, content, re.DOTALL)
if mc_match:
    preds = mc_match.group(1)
    ob_count = len(re.findall(r'"condition": "Obesity"', preds))
    print(f"Maine Coon has {ob_count} Obesity entries")
    if ob_count > 1:
        parts = preds.split('"condition": "Obesity"')
        if len(parts) >= 3:
            second_start = preds.index('"condition": "Obesity"', 
                preds.index('"condition": "Obesity"') + 1) - 1
            before_second = preds[:second_start]
            brace_start = before_second.rfind('{')
            if brace_start >= 0:
                after_second = preds[second_start:]
                depth = 0
                end_pos = 0
                for i, c in enumerate(after_second):
                    if c == '{': depth += 1
                    if c == '}':
                        depth -= 1
                        if depth == 0:
                            end_pos = i + 1
                            break
                if end_pos > 0:
                    before = preds[:brace_start].rstrip()
                    if before.endswith(','):
                        brace_start -= 1
                    new_preds = preds[:brace_start] + preds[brace_start + end_pos:]
                    content = content.replace(
                        f'"predispositions": [{preds}]',
                        f'"predispositions": [{new_preds}]'
                    )
                    print("Fixed Maine Coon duplicate Obesity")

# 8. Add BOAS to French Bulldog, Boston Terrier, Pug, Shih Tzu
boas_block = '''        {
          "condition": "Brachycephalic Airway Syndrome",
          "onsetAgeMonths": 6,
          "severity": 4,
          "screening": "BOAS grading by veterinarian"
        }'''

boas_breeds = ['French Bulldog', 'Boston Terrier', 'Pug', 'Shih Tzu']

for breed_name in boas_breeds:
    # Find the breed's predispositions array
    pattern = r'"name": "' + re.escape(breed_name) + r'"[\s\S]*?"predispositions": \[(.*?)\]'
    match = re.search(pattern, content, re.DOTALL)
    if match:
        preds = match.group(1)
        if 'Brachycephalic Airway Syndrome' in preds:
            print(f"{breed_name} already has BOAS — skipping")
        else:
            # Add BOAS before the closing ]
            # Check if array is empty
            is_empty = len(preds.strip()) == 0
            prefix = '\n' + boas_block + '\n      ' if is_empty else ',\n' + boas_block + '\n      '
            new_preds = prefix + preds.lstrip()
            # Actually, simpler: insert before the closing ]
            old_full = f'"predispositions": [{preds}]'
            new_full = f'"predispositions": [{preds},\n{boas_block}\n      ]'
            content = content.replace(old_full, new_full, 1)
            print(f"Added BOAS to {breed_name}")

with open(filepath, 'w') as f:
    f.write(content)

print("\nDone! All fixes applied.")