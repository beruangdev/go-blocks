const __prod__ = process.env.NODE_ENV === 'production'
const { src, dest, watch, series, parallel } = require('gulp')

const merge = require('merge-stream')
const concat = require('gulp-concat')

const sass = require('gulp-sass')(require('sass'))
const postcss = require('gulp-postcss')
const autoprefixer = require('gulp-autoprefixer')
const rimraf = require('rimraf')
const terser = require('terser');
const cssnano = require('cssnano');
const gulpTerser = require('gulp-terser');

const BUILD_DIR = "build"

const styles = [
    {
        src: './src/scss/editor.s[ca]ss',
        distName: 'gb.blocks.editor.build.css'
    },
    {
        src: './src/scss/frontend.s[ca]ss',
        distName: 'gb.blocks.style.build.css'
    }
]

const _build = () => {
    const task = styles.map((style) => {
        let tt = src(style.src)
            .pipe(
                sass({ outputStyle: 'compressed' }).on('error', sass.logError)
            )
            .pipe(postcss([
                cssnano(),
                require('postcss-import'),
                require('tailwindcss'),
                require('autoprefixer')
            ]))
            .pipe(
                autoprefixer({
                    browserlist: ['last 5 versions'],
                    cascade: false
                })
            )

        tt.pipe(concat(style.distName))
            .pipe(dest(`./${BUILD_DIR}`))

        return tt
    }
    )

    return merge(task)
}

function _clean(cb) {
    // rimraf('./dist/**/*.*', cb)
    cb()
}

function watchTask(cb) {
    watch('./src/**/*.{ts,tsx,js,jsx,php,scss}', _build)
    cb()
}

exports.default = series(_clean, _build, watchTask)
exports.build = series(_clean, parallel(_build))
