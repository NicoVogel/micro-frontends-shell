# Generic Micro Frontends Shell

Shell goals:
- lazy load components
  - use the file id's in order to ignore identical files 
  - if a mf needs a subtag of another component, load it
- create custom layouts
  - allow to load multiple layouts
- load mf based on route and layout
  - a mf is loaded if the selected layout needs it 
  - only main elements can be added in a layout
  - some mecanism which allows to only patialy reload the page. for example only the content part of the layout changes, than only this is changed

further goals:
- build a generater which sets up micro frontend applications
- allow custom generators to generate each micro frontend
- provide default scripts for debugging and building
