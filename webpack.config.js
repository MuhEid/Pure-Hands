const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { extendDefaultPlugins } = require("svgo");


const path = require('path');
module.exports = {
    mode:"production",   // mode production or development 
    entry:"./Js/Home.js",
    output:{   // output file dir 
        path:path.resolve(__dirname,'build'),
        filename:'Home.js',
        assetModuleFilename:'assets/[name][ext]' // new image name 
    },
    module: {
        rules: [
          {   // css files 
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },{ // images 
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },{  // sass Files 
            test: /\.s[ac]ss$/i,
            use: [  
              // Creates `style` nodes from JS strings
              MiniCssExtractPlugin.loader,
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          }
        ],
      },
      optimization: { // minifiy extracted css file 
        minimizer: [
          // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
          '...',
          new CssMinimizerPlugin(),
           new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            // Lossless optimization with custom option
            // Feel free to experiment with options for better result for you
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 5 }],
              // Svgo configuration here https://github.com/svg/svgo#configuration
              [
                "svgo",
                {
                    name: 'preset-default',
                    params: {
                      overrides: {
                        // customize plugin options
                        convertShapeToPath: {
                          convertArcs: true
                        },
                        // disable plugins
                        convertPathData: false
                      }
                    }
                },
              ],
            ],
          },
        },
      })
        ],
      },
    plugins:[   
        new HtmlWebpackPlugin({template:'index.html'}), // to handle html files 
        new MiniCssExtractPlugin({filename:'style.min.css'}) // to extract css file 
    ],
  
}