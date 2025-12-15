import { Particle } from './particle.js';

export class TextParticle extends Particle {
    constructor(x, y, vx, vy, currentTicks, color, text, aliveForTicks = 25) {
        super(x, y);

        this.vx = vx;
        this.vy = vy;
        this.color = color;
        this.text = text;
        this.aliveForTicks = aliveForTicks;
        this.createdAt = currentTicks;
    }

    draw(ctx, cameraX, cameraY) {
        ctx.fillStyle = this.color;
        ctx.font = '12px Arial';
        ctx.fillText(this.text, this.x - cameraX, this.y - cameraY);
    }
}