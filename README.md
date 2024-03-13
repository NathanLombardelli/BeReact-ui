# BeReact-ui
Bibliothèque de composants React open-source
## Comment ajouter son composant ?
- Cloner ce repositorie sur votre machine.
- Aller sur la branche develop : ``git checkout develop``
- Dans votre console :<br>
  ```
  cd le_chemin_du_projet
  npm i
  cd packages/BeReact-ui
  npm i
  cd ../../test/BeReact-ui-test
  npm i
  ```
- Créez une nouvelle branche et aller dessus, avec comme nom le nom de votre composant : ``git checkout -b nom_de_votre_branche``
- Dans packages/BeReact-ui/src, allez dans le dossier qui correspond à la catégorie du composant que vous souhaitez créer et créez un dossier du nom de votre composant en camelCase.
- Dans ce dossier, créez votre composant en .tsx et son .css/.scss. (N'oubliez pas d'importer le .css/.scss à votre composant).
- Ajouter au index.ts de la catégorie (le composant doit être exporté par défaut) : <br>``export { default as NOM_COMPOS } from './DOSSIER_COMPOS/COMPOS.tsx'``
- Ajouter au index.ts de src : <br>``export { default as NOM_COMPOS } from './CATEGORIE/DOSSIER_COMPOS/COMPOS.tsx'``
- Faites des commits puis un ``git push``
- Une fois le composant terminer, faites une Pull Request vers la branche develop:



### Si nouvelle catégorie
- vite.config.ts : in build/lib/entry ``'CATEGORIE': path.resolve(__dirname, 'src/CATEGORIE'),``
- package.json : add in exports. <br>
```
  "./CATEGORIE": {
  "import": "./dist/CATEGORIE/bereact-ui.es.js",
  "require": "./dist/CATEGORIE/bereact-ui.cjs.js",
  "types": "./dist/CATEGORIE/index.d.ts"
  },
```
## Pour tester son composant
Il est préférable de créer ses composants dans un autre projet (besoin de relancer le projet test à chaque modification de la bibliothèque (à fix)).

- Dans test, importez dans App.tsx le composant à tester.
- Ajoutez le composant à la 'TESTS ZONE'.
- Dans packages/BeReact-ui, exécutez ``npm run build`` à chaque modification ou utilisez ``npm run build:dev`` pour construire automatiquement à chaque modification.
- Dans test/BeReact-ui-test executer ``npm run dev``  à chaque modification du package (à fix).
