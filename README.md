# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
This lab was simple ish but it had its challenges with the amount of components working together some times i lost track of what i was doing and what i needed to do over focusing on the smaller parts of the code i was doing  but the biggest problem occured with the json file as i was referencing it i used temperature but the fields name was temp and i would get and empty string compared to the real recipe and would get the answer wrong regardless of what i did. until i realized it and arranged the variables to the same name.
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
