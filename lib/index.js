
        import Form from './Form';
import MyComponent from './MyComponent';
import Search from './Search';
  
        const version = '1.0.4-bate.46';
        function install(Vue) {
            const components = [
				// !skipInstall.includes(item)
				Form,
    MyComponent,
    Search
            ];
        
            components.forEach(item => {
                if (item.install) {
                    Vue.use(item);
                } else if (item.name) {
                    Vue.component(item.name, item);
                }
            });
        }
        
        if (typeof window !== 'undefined' && window.Vue) {
            install(window.Vue);
        }
        
        export {
            install,
            version,
            Form,
  MyComponent,
  Search
        };
        
        export default {
            install,
            version
        };
  