const { execSync } = require("child_process");
const { writeFileSync, unlinkSync } = require("fs");

try {
  execSync("git branch -D gh-pages");
} catch {}

execSync("git checkout -b gh-pages");
execSync("npm run build");

unlinkSync("./.gitignore");
writeFileSync("./.gitignore", "node_modules");
unlinkSync("./index.html");
writeFileSync("./index.html", 
`<!DOCTYPE html>
<html lang="en">
  <head>
    <script>
      document.location.assign("/solid-joystick-applied/dist")
    </script>
  </head>
</html>
`);
execSync("git add -A");
execSync("git commit -am \"deploy: github pages\"");
execSync("git push --force --set-upstream origin gh-pages");
execSync("git checkout main");