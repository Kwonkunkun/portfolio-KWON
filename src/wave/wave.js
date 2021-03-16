import { Point } from "./point.js";

export class Wave {
    constructor(stageWidth, stageHeight, numOfPoint, color, idx, waveAmp) {
        this.waveAmp = waveAmp;
        this.idx = idx;
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        this.numOfPoint = numOfPoint;
        this.color = color;
        this.init(stageWidth, stageHeight);
    }
    init(stageWidth, stageHeight) {
        this.points = [];
        for (let i = 0; i < this.numOfPoint; i++) {
            const point = new Point(
                (stageWidth / (this.numOfPoint - 1)) * i,
                stageHeight / 2,
                0,
                this.calAmplitude(i, this.waveAmp, this.numOfPoint)
            );
            point.t = this.idx + i / (this.numOfPoint - 1);
            this.points.push(point);
        }

        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
    }

    calAmplitude(idx, maxAmplitude, numOfPoint) {
        return idx < numOfPoint / 2
            ? (maxAmplitude / numOfPoint) * idx
            : (maxAmplitude / numOfPoint) * (numOfPoint - 1 - idx);
    }

    changeAmplitude(maxAmplitude) {
        this.points.forEach((point, idx) => {
            point.setAmplitude(
                this.calAmplitude(idx, maxAmplitude, this.numOfPoint)
            );
        });
    }

    resize(stageWidth, stageHeight) {
        this.init(stageWidth, stageHeight);
    }

    draw(ctx) {
        let prevX = this.points[0].x;
        let prevY = this.points[0].y;
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.moveTo(prevX, prevY);
        for (let i = 0; i < this.points.length; i++) {
            if (i === 0 || i === this.points.length - 1) {
                this.points[i].t = 0;
            }
            this.points[i].draw(ctx);

            //점끼리 선긋기
            const currentX = this.points[i].x;
            const currentY = this.points[i].y + this.points[i].dy;
            const cx = (currentX + prevX) / 2;
            const cy = (currentY + prevY) / 2;
            ctx.quadraticCurveTo(prevX, prevY, cx, cy);
            prevX = currentX;
            prevY = currentY;
        }
        ctx.lineTo(prevX, prevY);
        ctx.lineTo(this.stageWidth, this.stageHeight);
        ctx.lineTo(this.points[0].x, this.stageHeight);
        ctx.lineTo(this.points[0].x, this.points[0].y);
        ctx.fill();
        ctx.closePath();
    }
}
