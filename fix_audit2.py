import re

filepath = '/home/team/shared/implementation_v1/src/data/breeds.ts'
with open(filepath, 'r') as f:
    content = f.read()

# 1. Akita - remove duplicate Hip Dysplasia
# The second Hip Dysplasia entry is after Osteosarcoma
old = '''        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
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
new = '''        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }'''
if old in content:
    content = content.replace(old, new)
    print("✅ Akita: removed duplicate Hip Dysplasia")
else:
    print("⚠️ Akita: pattern not found")

# 2. Alaskan Malamute - check if duplicate Hip Dysplasia exists
# Find the Alaskan Malamute predispositions section
am_start = content.find('"name": "Alaskan Malamute"')
if am_start >= 0:
    # Find the predispositions array
    preds_start = content.find('"predispositions": [', am_start)
    if preds_start >= 0:
        # Find the closing ]
        arr_start = content.find('[', preds_start)
        depth = 0
        arr_end = arr_start
        for i in range(arr_start, len(content)):
            if content[i] == '[': depth += 1
            if content[i] == ']':
                depth -= 1
                if depth == 0:
                    arr_end = i
                    break
        preds_block = content[arr_start:arr_end+1]
        hd_count = preds_block.count('"condition": "Hip Dysplasia"')
        print(f"Alaskan Malamute: {hd_count} Hip Dysplasia entries")
        if hd_count > 1:
            # Need to remove second occurrence
            pass  # Handle if needed
else:
    print("⚠️ Alaskan Malamute: not found")

# 3. Chow Chow - remove duplicate Hip Dysplasia
cc_start = content.find('"name": "Chow Chow"')
if cc_start >= 0:
    preds_start = content.find('"predispositions": [', cc_start)
    arr_start = content.find('[', preds_start)
    depth = 0
    arr_end = arr_start
    for i in range(arr_start, len(content)):
        if content[i] == '[': depth += 1
        if content[i] == ']':
            depth -= 1
            if depth == 0:
                arr_end = i
                break
    preds_block = content[arr_start:arr_end+1]
    hd_count = preds_block.count('"condition": "Hip Dysplasia"')
    print(f"Chow Chow: {hd_count} Hip Dysplasia entries")
    if hd_count > 1:
        # Find the second Hip Dysplasia entry and remove it
        # Find the position of the second occurrence
        first_hd = preds_block.find('"condition": "Hip Dysplasia"')
        second_hd = preds_block.find('"condition": "Hip Dysplasia"', first_hd + 1)
        # Find the start of the block (the opening {)
        before_second = preds_block[:second_hd]
        brace_start = before_second.rfind('{')
        # Find the end of the block (the closing })
        after_second = preds_block[second_hd:]
        depth = 0
        block_end = 0
        for i, c in enumerate(after_second):
            if c == '{': depth += 1
            if c == '}':
                depth -= 1
                if depth == 0:
                    block_end = i + 1
                    break
        # Remove the block and the comma before it
        full_block = preds_block[brace_start:brace_start + block_end]
        # Check if there's a comma before
        full_block_with_comma = ',' + full_block
        if full_block_with_comma in preds_block:
            new_preds_block = preds_block.replace(full_block_with_comma, '', 1)
        else:
            new_preds_block = preds_block.replace(full_block, '', 1)
        content = content[:arr_start] + new_preds_block + content[arr_end+1:]
        print("✅ Chow Chow: removed duplicate Hip Dysplasia")

# 4. Maine Coon - remove duplicate Obesity
mc_start = content.find('"name": "Maine Coon"')
if mc_start >= 0:
    preds_start = content.find('"predispositions": [', mc_start)
    arr_start = content.find('[', preds_start)
    depth = 0
    arr_end = arr_start
    for i in range(arr_start, len(content)):
        if content[i] == '[': depth += 1
        if content[i] == ']':
            depth -= 1
            if depth == 0:
                arr_end = i
                break
    preds_block = content[arr_start:arr_end+1]
    ob_count = preds_block.count('"condition": "Obesity"')
    print(f"Maine Coon: {ob_count} Obesity entries")
    if ob_count > 1:
        first_ob = preds_block.find('"condition": "Obesity"')
        second_ob = preds_block.find('"condition": "Obesity"', first_ob + 1)
        before_second = preds_block[:second_ob]
        brace_start = before_second.rfind('{')
        after_second = preds_block[second_ob:]
        depth = 0
        block_end = 0
        for i, c in enumerate(after_second):
            if c == '{': depth += 1
            if c == '}':
                depth -= 1
                if depth == 0:
                    block_end = i + 1
                    break
        full_block = preds_block[brace_start:brace_start + block_end]
        full_block_with_comma = ',' + full_block
        if full_block_with_comma in preds_block:
            new_preds_block = preds_block.replace(full_block_with_comma, '', 1)
        else:
            new_preds_block = preds_block.replace(full_block, '', 1)
        content = content[:arr_start] + new_preds_block + content[arr_end+1:]
        print("✅ Maine Coon: removed duplicate Obesity")

# 5. Add BOAS to French Bulldog, Boston Terrier, Pug, Shih Tzu
boas_entry = '''        {
          "condition": "Brachycephalic Airway Syndrome",
          "onsetAgeMonths": 6,
          "severity": 4,
          "screening": "BOAS grading by veterinarian"
        }'''

boas_breeds = ['French Bulldog', 'Boston Terrier', 'Pug', 'Shih Tzu']

for breed_name in boas_breeds:
    breed_start = content.find(f'"name": "{breed_name}"')
    if breed_start < 0:
        print(f"⚠️ {breed_name}: not found")
        continue
    
    preds_start = content.find('"predispositions": [', breed_start)
    arr_start = content.find('[', preds_start)
    depth = 0
    arr_end = arr_start
    for i in range(arr_start, len(content)):
        if content[i] == '[': depth += 1
        if content[i] == ']':
            depth -= 1
            if depth == 0:
                arr_end = i
                break
    
    preds_block = content[arr_start:arr_end+1]
    
    if 'Brachycephalic Airway Syndrome' in preds_block:
        print(f"✅ {breed_name}: already has BOAS — skipping")
        continue
    
    # Check if the array is empty (just [])
    inner = preds_block[1:-1].strip()
    if inner == '':
        # Empty array: just insert the entry
        new_preds_block = '[\n' + boas_entry + '\n      ]'
    else:
        # Non-empty: add comma before closing ]
        # Replace the last ] with ,\nBOAS\n      ]
        new_preds_block = preds_block.rstrip()
        if new_preds_block.endswith(']'):
            new_preds_block = new_preds_block[:-1] + ',\n' + boas_entry + '\n      ]'
        else:
            # Fallback
            new_preds_block = '[' + inner + ',\n' + boas_entry + '\n      ]'
    
    content = content[:arr_start] + new_preds_block + content[arr_end+1:]
    print(f"✅ {breed_name}: added BOAS")

with open(filepath, 'w') as f:
    f.write(content)

print("\nAll fixes applied!")