./node_modules/google-closure-library/closure/bin/build/closurebuilder.py \
  --root=node_modules/google-closure-library \
  --root=project_name \
  --namespace="project_name.start" \
  --output_mode=compiled \
  --compiler_jar=node_modules/google-closure-compiler/compiler.jar \
> build/bundle.js
