/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef } from "react";
import { css } from "@emotion/react";
import { WaveGroup } from "../wave/waveGroup";

const Canvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let stageWidth = document.body.clientWidth;
        let stageHeight = document.body.clientHeight * 0.4;
        const waveGroup = new WaveGroup(stageWidth, stageHeight, 2);
        let animationFrameId;

        //resize
        const resize = () => {
            stageWidth = document.body.clientWidth;
            stageHeight = document.body.clientHeight * 0.4;

            //레티나 디스플레이를 위해서
            canvas.width = stageWidth * 2;
            canvas.height = stageHeight * 2;
            ctx.scale(2, 2);

            if (waveGroup !== undefined) {
                waveGroup.resize(stageWidth, stageHeight);
            }
        };
        resize();

        //animate
        const draw = () => {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            waveGroup.draw(ctx);
            animationFrameId = window.requestAnimationFrame(draw);
        };
        draw();

        //events
        window.addEventListener("resize", resize);

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas css={canvasStyle} ref={canvasRef} />;
};

const canvasStyle = css`
    background: rgb(255, 192, 192);
    width: 100vw;
    height: 60vh;
`;

export default Canvas;
