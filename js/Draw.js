
function Vector2d(a,b)
{
    return {a,b};
}

function ImageRenderer({srcPath,srcPosition,srcDimension,dstPosition,dstDimension})
{
    this.elem = new Image();
    this.elem.src = srcPath;

    this.src = Vector2d(srcPosition,srcDimension);
    this.dst = Vector2d(dstPosition,dstDimension);
}
ImageRenderer.prototype.render = function(ctx){
    ctx.drawImage(this.elem,this.src.a.a,this.src.a.b,this.src.b.a,this.src.b.b,this.dst.a.a,this.dst.a.b,this.dst.b.a,this.dst.b.b);
}

export const Draw = {
    ImageRenderer,
    Vector2d
}