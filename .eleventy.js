module.exports=function(eleventyConfig){
    eleventyConfig.addPassthroughCopy('./src/includes')
    return{
        dir:{
            input:"src",
            output:"public"
        }
    }
}