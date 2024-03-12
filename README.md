# BeReact-ui
Librarie de composants React open-source
## Comment ajouter son composant ?
- Cloner ce repo sur votre machine.
- Dans votre console :<br>
  ```
  cd le_chemin_du_projet
  npm i
  cd packages/BeReact-ui
  npm i
  cd ../../test/BeReact-ui-test
  npm i
  ```
- Dans packages/BeReact-ui/src , aller dans le dossier qui correspond à catégorie du composant que vous souhaiter créer et créer un dossier du nom de votre composant en camelCase.
- Dans ce dossier créer votre composant en .tsx et son .css/.scss. ( n'oublier pas d'importer le .css/.scss a votre composant ).
- Ajouter au index.ts de la catégorie ( le compos doit être export default ): <br>``export { default as NOM_COMPOS } from './DOSSIER_COMPOS/COMPOS.tsx'``
- Ajouter au index.ts de src : <br> ``export { default as NOM_COMPOS } from './CATEGORIE/DOSSIER_COMPOS/COMPOS.tsx'``

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
il est préférable de créer ses composants dans un autre projet (besoin de relancer le projet test à chaque modification de la librairie (à fix)).

- Dans test, importer dans App.tsx le composant à tester.
- Ajouter le composant à la 'TESTS ZONE'.
- Dans packages/BeReact-ui , executer ``npm run build`` a chaque modifications ou utiliser ``npm run build:dev`` pour build automatiquement a chaque modification.
- Dans test/BeReact-ui-test executer ``npm run dev`` à chaque modification de package ( à fix ).
