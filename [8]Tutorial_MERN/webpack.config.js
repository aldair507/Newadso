module.exports = {
    entry: './src/app/index.js',
    output: {
        path: __dirname + '/src/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                use: "babel-loader", //webpack se podra comunicar con babel (USANDO ESTA LINEA DE COMANDO)
                test: /\.js$/, //Permite ejecutar o buscar todos los archivos de formato Js
                exclude: /node_modules/ 
            }
        ]
    }
}; //Esto convierte el formato JS que esta en la ubicacion de "entry", lo convierte para luego guardarlo en la carpeta public.