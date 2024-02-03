import json

def sort_json_by_name(input_file, output_file):
    with open(input_file, 'r') as f:
        data = json.load(f)

    # Sort the data by the values of the 'name' field
    sorted_data = sorted(data, key=lambda x: x['name'])

    with open(output_file, 'w') as f:
        json.dump(sorted_data, f, indent=2)

# Example usage:
input_json_file = 'woods.json'  # Replace with your input file name
output_json_file = 'sorted_output.json'  # Replace with your desired output file name

sort_json_by_name(input_json_file, output_json_file)
