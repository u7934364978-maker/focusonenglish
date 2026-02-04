import json
import csv
import os

def convert_json_to_csv(json_path, csv_path):
    # Check if the JSON file exists
    if not os.path.exists(json_path):
        print(f"Error: {json_path} does not exist.")
        return

    # Load the JSON data
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    # Flatten the data into a list of (category, keyword) tuples
    rows = []
    for category, keywords in data.items():
        for keyword in keywords:
            rows.append({'category': category, 'keyword': keyword})

    # Write the data to a CSV file
    fieldnames = ['category', 'keyword']
    with open(csv_path, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)

    print(f"Successfully converted {json_path} to {csv_path}")
    print(f"Total rows written: {len(rows)}")

if __name__ == "__main__":
    base_dir = "/Users/lidia/Documents/focusonenglish"
    json_file = os.path.join(base_dir, "seo-keyword-categorization.json")
    csv_file = os.path.join(base_dir, "seo-keyword-categorization.csv")
    
    convert_json_to_csv(json_file, csv_file)
