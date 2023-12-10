# Next.js `use python`

Use python right inside of your Next.js project. 
Just like `use server` (kinda).

![use-python](https://github.com/dzc0d3r/nextjs-use-python/assets/49822541/64fec7c0-5939-404e-b2ca-2f59e0ed0f4e)


## How to use ? 
You can use it in React Server Components just like this: 

```jsx
return (
    <button
          className="min-w-[10rem] rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          formAction={async () => { 
            'use python'
            import this
            import codecs
            with open('./public/readme.txt', 'w') as f:
                f.write(codecs.encode(this.s, 'rot13'))
            }}>
          Save to File
    </button>
)
```

And if you want to it can even work with React Client Components

```javascript
// actions.js
'use server'

export async function pythonHelloWorld () {
    'use python'
    import this
}
```

```javascript
// page.tsx
import {pythonHelloWorld} from "../actions";
```


## How to run it ?

Yes this actually works. Trust me I wish it wouldn't too. 

## Build 

You can build the implementation by

```bash
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Roadmap (Things that should be fixed but realistically it will never happen)

- [ ] There is a probably a way to fix that nasty preprocess step with [SWC Plugins]( https://swc.rs/docs/plugin/ecmascript/getting-started) which are still in Beta with Next.js and also I think they will switch builder anyways soon so what's the point really? But hey if anyone wants to do it feel free.
- [ ] I guess there is some hacky way to make props binding possible.

## Credits

Heavily inspired by:

* https://github.com/bufferhead-code/nextjs-use-php

Check out the original implementations by elnardu for C and Rust:

* https://github.com/elnardu/react-use-c
* https://github.com/elnardu/react-use-rust

## Disclaimer

*I hope I don't have to say this but: If you even in the slightest consider to use this in any application at all you are an absolute madperson and and should be locked out of the internet for the rest of your life, I hope you find some other fun activity, maybe gardening or woodwork, One more thing good luck with correctly indenting your python code, don't forget to disable format on save in your editor.*
<!-- ## Self-Promo

If you enjoyed this project and want to see more silly web development projects, you can follow me on [Twitter](https://twitter.com/bufferhead_), [Bluesky](https://bsky.app/profile/bufferhead.bsky.social) and [Youtube](https://www.youtube.com/@bufferhead_). --> 
