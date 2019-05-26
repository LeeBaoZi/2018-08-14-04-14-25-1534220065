module.exports = function main(a) {
    var i,j
    var b=new Array();
    var c=new Array();
    for(i=0;i<a.length;i++){
        switch(a[i]){
            case '0':
            b[i]=new Array();
            b[i][0]='._.';
            b[i][1]='|.|';
            b[i][2]='|_|';
            break;
            case '1':
            b[i]=new Array();
            b[i][0]='...';
            b[i][1]='..|';
            b[i][2]='..|';
            break;
            case '2':
            b[i]=new Array();
            b[i][0]='._.';
            b[i][1]='._|';
            b[i][2]='|_.';
            break;
            case '3':
            b[i]=new Array();
            b[i][0]='._.';
            b[i][1]='._|';
            b[i][2]='._|';
            break;
            case '4':
            b[i]=new Array();
            b[i][0]='...';
            b[i][1]='|_|';
            b[i][2]='..|';
            break;
            case '5':
            b[i]=new Array();
            b[i][0]='._.';
            b[i][1]='|_.';
            b[i][2]='._|';
            break;
            case '6':
            b[i]=new Array();
            b[i][0]='._.';
            b[i][1]='|_.';
            b[i][2]='|_|';
            break;
            case '7':
            b[i]=new Array();
            b[i][0]='._.';
            b[i][1]='..|';
            b[i][2]='..|';
            break;
            case '8':
            b[i]=new Array();
            b[i][0]='._.';
            b[i][1]='|_|';
            b[i][2]='|_|';
            break;
            case '9':
            b[i]=new Array();
            b[i][0]='._.';
            b[i][1]='|_|';
            b[i][2]='..|';
            break;
            default:
            break;
        }
    }
    for(i=0;i<3;i++){
        c[i]=new Array();
        for(j=0;j<a.length-1;j++){
            c[i]=c[i]+b[j][i]+' ';
        }
        c[i]=c[i]+b[j][i]+'\n';
    }
    console.log(c[0]+c[1]+c[2]);
    return c[0]+c[1]+c[2];
};