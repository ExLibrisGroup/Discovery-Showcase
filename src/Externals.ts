// JSONP based on https://github.com/erikarenhill/Lightweight-JSONP
export class Externals {
    config: any
    counter: any
    head: any
    readyState: any
    window: any
    constructor(window: any, config = {}){
       this.window = window
       this.config = config
       this.counter = 0
       this.head = document.getElementsByTagName('head')[0]
    }
 
    load(url: any, pfnError: any) {
       const script : any = document.createElement('script')
       let done = false
       script.src = url
       script.async = true
       const errorHandler = pfnError || this.config.error
       if (typeof errorHandler === 'function') {
          script.onerror = ( ex: any )=> errorHandler({
             url,
             event: ex
          })
       }
 
       script.onload = (script.onreadystatechange = function() {
          if (!done && (!this.readyState || (this.readyState === 'loaded') || (this.readyState === 'complete'))) {
             done = true
             script.onload = (script.onreadystatechange = null)
             if (script && script.parentNode) {
                return script.parentNode.removeChild(script)
             }
          }
       })
 
       return this.head.appendChild(script)
    }
 
    jsonp(url: string, params: Record<string, any> = {}, callbackName?: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const query = url.includes('?') ? '&' : '?';
            const cbName = callbackName || this.config['callbackName'] || 'callback';
            const uniqueName = `${cbName}_json${++this.counter}`;
    
            // Add the callback parameter to the request
            params[cbName] = uniqueName;
            const fullUrl = url + query + this.objToQ(params);
    
            // Attach the callback to the window object
            this.window[uniqueName] = (data: any) => {
                try {
                    resolve(data);
                } finally {
                    // Clean up the callback to avoid memory leaks
                    delete this.window[uniqueName];
                }
            };
    
            // Handle script loading and errors
            this.load(fullUrl, (error: any) => {
                reject(error);
            });
        });
    }
    
 
    encode(str: any) {
       return encodeURIComponent(str)
    }
 
    // Object to url Query
    objToQ(obj: any, arrayMark = true, arraySeparator = '', includeEmpties = false) {
       if ((typeof obj !== 'object') || !Object.keys(obj).length) {
          return ''
       }
       const keys = Object.keys(obj)
       const str = []
       for (var key of keys) {
          var value = obj[key]
          if (!includeEmpties && (!value || (value.length === 0))) { continue }
 
          if (value instanceof Array) {
             if (!arraySeparator) {
                for (var val of value) {
                   str.push(this.encode(key + (arrayMark ? '[]' : '')) + '=' + this.encode(val))
                }
             } else {
                str.push(this.encode(key) + '=' + this.encode(value.join(arraySeparator)))
             }
          } else {
             str.push(this.encode(key) + '=' + this.encode(value))
          }
       }
       return str.join('&')
    }
 }
 