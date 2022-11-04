# Guo Yunhe's React App Template

## Get Started

```
pnpm install
pnpm start
```

## Technology | 技术选型

### Build tool: Vite 3

Create-React-App is based on webpack and babel, which get slower as project size growing.

Vite(esbuild) and Parcel 2 (swc) are much faster. Parcel still need a lot of hacks to work for a simple React app, while Vite is working out-of-box. So Vite becomes my best choice.

### Programming language: TypeScript

### Framework: React 18

Function components + hooks.

### Style system: Emotion (CSS-in-JS)

### Component library: Chakra UI

### Routing library: React Router

### I18n library: I18next

### HTTP client: axios

Compared to native `fetch` function, axios has two main advantage:

- support global default configuration, like headers, cors
- automatically handle JSON request and response

### State management & caching: [swr](https://swr.vercel.app/)

Compared to redux, swr is way more simple. Write less code. Get caching and auto refresh out-of-box.

### Unit test framework: vitest

## Browser Compatibility

Same as Vite 3.x:

- Chrome >=87
- Firefox >=78
- Safari >=13
- Edge >=88
