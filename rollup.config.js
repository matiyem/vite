import { defineConfig } from 'rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
import svg from 'rollup-plugin-svg';


import { terser } from 'rollup-plugin-terser';

export default ({

    input: 'src/App.jsx', // فایل اصلی SDK شما
    output: [
        {
            file: 'dist/sdk.js', // نام فایل خروجی SDK
            format: 'umd', // فرمت خروجی (می‌تواند umd، esm و یا iife باشد)
            name: 'MySDKComponent', // نام متغیری که برای دسترسی به SDK در محیط‌های غیر ماژولار استفاده می‌شود
            exports:"default"


        },

    ],

    plugins: [
        nodeResolve(),
        commonjs(),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**', // اگر نیازی به تبدیل فایل‌های node_modules ندارید
        }),
        postcss({
            extract: false, // جدا کردن فایل‌های CSS از فایل‌های JS
        }),
        image(), // افزودن افزونه Image
        svg(),
        terser(), // فشرده‌سازی کد
    ],
});