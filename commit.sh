#!/usr/bin/bash
echo "Suppresion des fichier :Zone.Identifier"
find . -type f -name "*:Zone.Identifier*" -exec rm -v {} \;
find . -type d -name ".vscode"  -exec rm -rf {} +
clear
git status
chmod +x commit.sh
echo "COMMIT DU FICHIER - entrez le commit du fichier CTRL+C pour annuler"
read commit 
git add .
git commit -m "$commit"
git push origin master