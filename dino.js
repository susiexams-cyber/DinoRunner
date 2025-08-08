class Dino {
    constructor(x, groundY) {
        this.x = x;
        this.groundY = groundY;
        this.width = 60;
        this.height = 80;
        
        // Position and physics
        this.y = groundY - this.height;
        this.velocityY = 0;
        this.gravity = 0.8;
        this.jumpPower = -16;
        
        // States
        this.isJumping = false;
        this.isDucking = false;
        this.isGrounded = true;
        
        // Animation
        this.animationFrame = 0;
        this.animationSpeed = 150; // milliseconds per frame
        this.animationTimer = 0;
        this.blinkTimer = 0;
        this.blinkInterval = 2000; // blink every 2 seconds
        this.isBlinking = false;
        
        // Colors for cartoonish design
        this.colors = {
            body: '#32CD32',      // Lime green
            belly: '#90EE90',     // Light green
            outline: '#228B22',   // Forest green
            eye: '#000000',       // Black
            eyeWhite: '#FFFFFF',  // White
            spots: '#006400'      // Dark green
        };
        
        // Running animation frames
        this.runFrames = 4;
        this.currentRunFrame = 0;
    }
    
    update(deltaTime) {
        // Update animations
        this.updateAnimation(deltaTime);
        
        // Update physics
        this.updatePhysics(deltaTime);
        
        // Update blinking
        this.updateBlinking(deltaTime);
    }
    
    updateAnimation(deltaTime) {
        if (!this.isJumping && !this.isDucking) {
            this.animationTimer += deltaTime;
            
            if (this.animationTimer >= this.animationSpeed) {
                this.currentRunFrame = (this.currentRunFrame + 1) % this.runFrames;
                this.animationTimer = 0;
            }
        }
    }
    
    updatePhysics(deltaTime) {
        if (this.isJumping) {
            this.velocityY += this.gravity;
            this.y += this.velocityY;
            
            // Check if landed
            if (this.y >= this.groundY - this.height) {
                this.y = this.groundY - this.height;
                this.velocityY = 0;
                this.isJumping = false;
                this.isGrounded = true;
            }
        }
    }
    
    updateBlinking(deltaTime) {
        this.blinkTimer += deltaTime;
        
        if (this.blinkTimer >= this.blinkInterval) {
            this.isBlinking = true;
            setTimeout(() => {
                this.isBlinking = false;
            }, 150); // Blink duration
            
            this.blinkTimer = 0;
            // Randomize next blink
            this.blinkInterval = 1500 + Math.random() * 2000;
        }
    }
    
    jump() {
        if (this.isGrounded && !this.isDucking) {
            this.velocityY = this.jumpPower;
            this.isJumping = true;
            this.isGrounded = false;
            
            // Play jump sound
            if (window.audioManager) {
                window.audioManager.playSound('jump');
            }
        }
    }
    
    duck() {
        if (this.isGrounded) {
            this.isDucking = true;
            
            // Play duck sound
            if (window.audioManager) {
                window.audioManager.playSound('duck');
            }
        }
    }
    
    stopDuck() {
        this.isDucking = false;
    }
    
    render(ctx) {
        ctx.save();
        
        // Adjust position and size for ducking
        let renderY = this.y;
        let renderHeight = this.height;
        
        if (this.isDucking) {
            renderHeight = this.height * 0.6;
            renderY = this.groundY - renderHeight;
        }
        
        // Draw dino body
        this.drawBody(ctx, this.x, renderY, this.width, renderHeight);
        
        // Draw legs (running animation)
        if (!this.isJumping && !this.isDucking) {
            this.drawLegs(ctx, this.x, renderY + renderHeight);
        }
        
        // Draw arms
        this.drawArms(ctx, this.x, renderY);
        
        // Draw head
        this.drawHead(ctx, this.x, renderY);
        
        // Draw tail
        this.drawTail(ctx, this.x, renderY);
        
        ctx.restore();
    }
    
    drawBody(ctx, x, y, width, height) {
        // Main body (oval)
        ctx.fillStyle = this.colors.body;
        ctx.strokeStyle = this.colors.outline;
        ctx.lineWidth = 3;
        
        ctx.beginPath();
        ctx.ellipse(x + width/2, y + height * 0.6, width * 0.4, height * 0.4, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Belly
        ctx.fillStyle = this.colors.belly;
        ctx.beginPath();
        ctx.ellipse(x + width/2, y + height * 0.65, width * 0.25, height * 0.25, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Spots
        ctx.fillStyle = this.colors.spots;
        const spots = [
            {x: x + width * 0.3, y: y + height * 0.4, size: 4},
            {x: x + width * 0.7, y: y + height * 0.5, size: 3},
            {x: x + width * 0.5, y: y + height * 0.3, size: 5}
        ];
        
        spots.forEach(spot => {
            ctx.beginPath();
            ctx.arc(spot.x, spot.y, spot.size, 0, Math.PI * 2);
            ctx.fill();
        });
    }
    
    drawHead(ctx, x, y) {
        const headSize = this.width * 0.35;
        const headX = x + this.width * 0.6;
        const headY = y + this.height * 0.15;
        
        // Head
        ctx.fillStyle = this.colors.body;
        ctx.strokeStyle = this.colors.outline;
        ctx.lineWidth = 3;
        
        ctx.beginPath();
        ctx.arc(headX, headY, headSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Snout
        ctx.beginPath();
        ctx.ellipse(headX + headSize * 0.6, headY + headSize * 0.2, headSize * 0.4, headSize * 0.25, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Eyes
        const eyeSize = 8;
        const eyeY = headY - headSize * 0.2;
        
        // Left eye
        ctx.fillStyle = this.colors.eyeWhite;
        ctx.beginPath();
        ctx.arc(headX - eyeSize, eyeY, eyeSize, 0, Math.PI * 2);
        ctx.fill();
        
        if (!this.isBlinking) {
            ctx.fillStyle = this.colors.eye;
            ctx.beginPath();
            ctx.arc(headX - eyeSize, eyeY, eyeSize * 0.6, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Right eye
        ctx.fillStyle = this.colors.eyeWhite;
        ctx.beginPath();
        ctx.arc(headX + eyeSize, eyeY, eyeSize, 0, Math.PI * 2);
        ctx.fill();
        
        if (!this.isBlinking) {
            ctx.fillStyle = this.colors.eye;
            ctx.beginPath();
            ctx.arc(headX + eyeSize, eyeY, eyeSize * 0.6, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Nostrils
        ctx.fillStyle = this.colors.outline;
        ctx.beginPath();
        ctx.arc(headX + headSize * 0.7, headY + headSize * 0.1, 2, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(headX + headSize * 0.8, headY + headSize * 0.2, 2, 0, Math.PI * 2);
        ctx.fill();
    }
    
    drawLegs(ctx, x, y) {
        const legWidth = 12;
        const legHeight = 25;
        
        // Animate legs for running effect
        const leftLegOffset = Math.sin(this.currentRunFrame * Math.PI / 2) * 5;
        const rightLegOffset = Math.cos(this.currentRunFrame * Math.PI / 2) * 5;
        
        ctx.fillStyle = this.colors.body;
        ctx.strokeStyle = this.colors.outline;
        ctx.lineWidth = 2;
        
        // Left leg
        ctx.beginPath();
        ctx.roundRect(x + this.width * 0.3, y - legHeight + leftLegOffset, legWidth, legHeight, 6);
        ctx.fill();
        ctx.stroke();
        
        // Right leg
        ctx.beginPath();
        ctx.roundRect(x + this.width * 0.6, y - legHeight + rightLegOffset, legWidth, legHeight, 6);
        ctx.fill();
        ctx.stroke();
        
        // Feet
        ctx.fillStyle = this.colors.outline;
        ctx.beginPath();
        ctx.ellipse(x + this.width * 0.3 + legWidth/2, y + 5 + leftLegOffset, legWidth * 0.8, 8, 0, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.beginPath();
        ctx.ellipse(x + this.width * 0.6 + legWidth/2, y + 5 + rightLegOffset, legWidth * 0.8, 8, 0, 0, Math.PI * 2);
        ctx.fill();
    }
    
    drawArms(ctx, x, y) {
        const armWidth = 8;
        const armLength = 20;
        
        ctx.fillStyle = this.colors.body;
        ctx.strokeStyle = this.colors.outline;
        ctx.lineWidth = 2;
        
        // Left arm
        ctx.beginPath();
        ctx.roundRect(x + this.width * 0.2, y + this.height * 0.4, armWidth, armLength, 4);
        ctx.fill();
        ctx.stroke();
        
        // Right arm
        ctx.beginPath();
        ctx.roundRect(x + this.width * 0.8, y + this.height * 0.4, armWidth, armLength, 4);
        ctx.fill();
        ctx.stroke();
    }
    
    drawTail(ctx, x, y) {
        const tailWidth = 15;
        const tailHeight = 30;
        
        ctx.fillStyle = this.colors.body;
        ctx.strokeStyle = this.colors.outline;
        ctx.lineWidth = 2;
        
        // Tail (curved)
        ctx.beginPath();
        ctx.ellipse(x - tailWidth/2, y + this.height * 0.5, tailWidth, tailHeight, -0.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    }
    
    getBoundingRect() {
        let height = this.height;
        let y = this.y;
        
        // Adjust bounding box for ducking
        if (this.isDucking) {
            height = this.height * 0.6;
            y = this.groundY - height;
        }
        
        return {
            x: this.x + 10, // Slight padding
            y: y + 5,
            width: this.width - 20,
            height: height - 10
        };
    }
    
    updateGroundLevel(newGroundY) {
        this.groundY = newGroundY;
        if (this.isGrounded) {
            this.y = this.groundY - this.height;
        }
    }
}

// Add roundRect method if not supported
if (!CanvasRenderingContext2D.prototype.roundRect) {
    CanvasRenderingContext2D.prototype.roundRect = function(x, y, width, height, radius) {
        this.beginPath();
        this.moveTo(x + radius, y);
        this.lineTo(x + width - radius, y);
        this.quadraticCurveTo(x + width, y, x + width, y + radius);
        this.lineTo(x + width, y + height - radius);
        this.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        this.lineTo(x + radius, y + height);
        this.quadraticCurveTo(x, y + height, x, y + height - radius);
        this.lineTo(x, y + radius);
        this.quadraticCurveTo(x, y, x + radius, y);
        this.closePath();
    };
}
