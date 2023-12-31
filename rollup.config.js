import { defineConfig } from 'rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
import svg from 'rollup-plugin-svg';
import path from 'path';



import { terser } from 'rollup-plugin-terser';

export default defineConfig ({
    // entry: path.join(__dirname, 'src/App.jsx'),
    //
    input: path.join(__dirname, 'src/App.jsx'), // فایل اصلی SDK شما
    output: [
        {
            file: path.resolve(__dirname, 'dist/sdk.js'), // تنظیم مسیر کامل فایل خروجی
            format: 'umd', // فرمت خروجی (می‌تواند umd، esm و یا iife باشد)
            name: 'MySDKComponent', // نام متغیری که برای دسترسی به SDK در محیط‌های غیر ماژولار استفاده می‌شود
            // exports:"default",
            globals: {
                react: 'React', // نام متغیر گلوبال برای React
                'react-dom': 'ReactDOM', // نام متغیر گلوبال برای ReactDOM
            },


        },

    ],

    plugins: [
        nodeResolve({
            extensions: ['.js', '.jsx']
        }),
        commonjs(),
        // babel(),
        babel({
            babelHelpers: 'bundled',
            presets: ["@babel/preset-env", "@babel/preset-react"],
            extensions: ['.js','.jsx']
        }),
        postcss({
            extract: false, // جدا کردن فایل‌های CSS از فایل‌های JS
        }),
        image(), // افزودن افزونه Image
        svg(),
        terser(), // فشرده‌سازی کد
    ],
});
