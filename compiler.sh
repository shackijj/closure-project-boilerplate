java -jar ./node_modules/google-closure-compiler/compiler.jar \
  --js project_name/**.js \
  --js project_name/**/**.js \
  --js package.json \
  --js_output_file build/bundle.min.js \
  --module_resolution NODE \
  --language_in=ES6 \
  --language_out=ES3 \
  --dependency_mode=STRICT \
  --entry_point=project_name/index.js
