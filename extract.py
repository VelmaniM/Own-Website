import json

transcript_path = "/Users/velmanikandan/.gemini/antigravity/brain/cd83bd31-dcb5-4d14-b190-6b6562a5d068/.system_generated/logs/transcript_full.jsonl"

app_jsx = None
index_css = None
index_html = None

with open(transcript_path, 'r') as f:
    for line in f:
        try:
            step = json.loads(line)
            if step['step_index'] >= 993:
                break
            
            if 'tool_calls' in step:
                for call in step['tool_calls']:
                    if call['name'] in ['write_to_file', 'replace_file_content', 'multi_replace_file_content']:
                        args = call['args']
                        target_file = args.get('TargetFile', '')
                        
                        if 'App.jsx' in target_file:
                            if call['name'] == 'write_to_file':
                                app_jsx = args['CodeContent']
                            # Note: if replace_file_content was used, it gets complicated. We only want the last full write.
                            
                        elif 'index.css' in target_file:
                            if call['name'] == 'write_to_file':
                                index_css = args['CodeContent']
                                
                        elif 'index.html' in target_file:
                            if call['name'] == 'write_to_file':
                                index_html = args['CodeContent']
        except Exception as e:
            pass

print("App.jsx length:", len(app_jsx) if app_jsx else 0)
print("index.css length:", len(index_css) if index_css else 0)
