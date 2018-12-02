export const imports = {
  'src/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-index" */ 'src/index.mdx'),
  'src/hello.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-hello" */ 'src/hello.mdx'),
  'src/components/Alert.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-alert" */ 'src/components/Alert.mdx'),
  'src/components/Button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-button" */ 'src/components/Button.mdx'),
}
