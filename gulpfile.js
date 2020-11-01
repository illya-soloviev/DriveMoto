"use strict";

const {src, dest} = require("gulp");
const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const cssbeautify = require("gulp-cssbeautify");
const cssnano = require("gulp-cssnano");
const imagemin = require("gulp-imagemin");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const rigger = require("gulp-rigger");
const sass = require("gulp-sass");
const removeComments = require("gulp-strip-css-comments");
const uglify = require("gulp-uglify");
const browsersync = require("browser-sync").create();
const del = require("del");

/* Paths */
var path = {
    build: {
        html: "dist/",
        js: "dist/assets/js/",
        css: "dist/assets/css/",
        images: "dist/assets/img/",
        vendorNotScss: "dist/assets/css/"
    },
    src: {
        html: "src/*.html",
        js: "src/assets/js/*.js",
        css: "src/assets/sass/style.scss",
        images: "src/assets/img/**/*.{jpg,png,svg,gif,ico,webmanifest,xml}",
        vendorNotScss: "src/assets/sass/vendor-not-scss/*.{css, min.css}"
    },
    watch: {
        html: "src/**/*.html",
        js: "src/assets/js/**/*.js",
        css: "src/assets/sass/**/*.scss",
        images: "src/assets/img/**/*.{jpg,png,svg,gif,ico,webmanifest,xml}",
        vendorNotScss: "src/assets/sass/vendor-not-scss/*.{css, min.css}"
    },
    clean: "./dist"
}


/* Tasks */
function browserSync(done) {
    browsersync.init({
        server: {
            baseDir: "./dist/"
        },
        port: 3000
    });
}

function browserSyncReload(done) {
    browsersync.reload();
}

function html() {
    return src(path.src.html, { base: "src/" })
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream());
}

function css() {
    return src(path.src.css, { base: "src/assets/sass/" })
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: true,
            Browserslist: ['last 8 versions']
        }))
        .pipe(cssbeautify())
        .pipe(dest(path.build.css))
        .pipe(cssnano({
            zindex: false,
            discardComments: {
                removeAll: true
            }
        }))
        .pipe(removeComments())
        .pipe(rename({
            suffix: ".min",
            extname: ".css"
        }))
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream());
}

/*     .pipe(uglify())
    .pipe(rename({
        suffix: ".min",
        extname: ".js"
    }))
    .pipe(dest(path.build.js)) */

function js() {
    return src(path.src.js, { base: "src/assets/js/" })
    .pipe(plumber())
    .pipe(rigger())
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream());
}

function images() {
    return src(path.src.images)
    .pipe(imagemin())
    .pipe(dest(path.build.images));
}

function vendorNotScss() {
    return src(path.src.vendorNotScss)
    .pipe(dest(path.build.vendorNotScss));
}

function clean() {
    return del(path.clean);
}

function watchFiles() {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.images], images);
    gulp.watch([path.watch.vendorNotScss], vendorNotScss);
}

const build = gulp.series(clean, gulp.parallel(html, css, js, images, vendorNotScss));
const watch = gulp.parallel(build, watchFiles, browserSync);

/* Exports Tasks */
exports.html = html;
exports.css = css;
exports.js = js;
exports.images = images;
exports.vendorNotScss = vendorNotScss;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = watch;
