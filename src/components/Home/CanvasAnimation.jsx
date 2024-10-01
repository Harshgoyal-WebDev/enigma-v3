import React, { useRef, useEffect } from 'react';

const CanvasAnimation = () => {
  const canvasRef = useRef(null);
  const height = 700;
  const width = 700;
  const stiffness = 0.5;
  const b = -1;
  const angularB = -7;
  const dt = 0.02;

  const Vector = function(x, y) {
    this.x = x;
    this.y = y;
  };

  Vector.prototype.add = function(v) {
    return new Vector(v.x + this.x, v.y + this.y);
  };

  Vector.prototype.subtract = function(v) {
    return new Vector(this.x - v.x, this.y - v.y);
  };

  Vector.prototype.multiply = function(multiplier) {
    return new Vector(this.x * multiplier, this.y * multiplier);
  };

  Vector.prototype.divide = function(divider) {
    return new Vector(this.x / divider, this.y / divider);
  };

  Vector.prototype.dot = function(v) {
    return this.x * v.x + this.y * v.y;
  };

  Vector.prototype.cross = function(v) {
    return this.x * v.y - this.y * v.x;
  };

  Vector.prototype.rotate = function(angle, vector) {
    const x = this.x - vector.x;
    const y = this.y - vector.y;

    const x_prime = vector.x + (x * Math.cos(angle) - y * Math.sin(angle));
    const y_prime = vector.y + (x * Math.sin(angle) + y * Math.cos(angle));

    return new Vector(x_prime, y_prime);
  };

  const Rect = function(x, y, w, h, m) {
    this.mass = typeof m === 'undefined' ? 1 : m;
    this.width = w;
    this.height = h;
    this.topLeft = new Vector(x, y);
    this.topRight = new Vector(x + w, y);
    this.bottomRight = new Vector(x + w, y + h);
    this.bottomLeft = new Vector(x, y + h);
    this.velocity = new Vector(0, 0);
    this.acceleration = new Vector(0, 0);
    this.angle = 0;
    this.angular_velocity = 0;
    this.angular_acceleration = 0;
    this.moment_of_inertia = (this.mass * (this.height * this.height + this.width * this.width)) / 12000;
    this.rxf = 0.1;

    Object.defineProperty(this, 'angleInDegrees', {
      get: function() {
        return (this.angle * 180) / Math.PI;
      },
    });
  };

  Rect.prototype.center = function() {
    const diagonal = this.bottomRight.subtract(this.topLeft);
    return this.topLeft.add(diagonal.multiply(0.5));
  };

  Rect.prototype.rotate = function(angle) {
    this.angle += angle;
    const center = this.center();

    this.topLeft = this.topLeft.rotate(angle, center);
    this.topRight = this.topRight.rotate(angle, center);
    this.bottomRight = this.bottomRight.rotate(angle, center);
    this.bottomLeft = this.bottomLeft.rotate(angle, center);

    return this;
  };

  Rect.prototype.move = function(v) {
    this.topRight = this.topRight.add(v);
    this.topLeft = this.topLeft.add(v);
    this.bottomRight = this.bottomRight.add(v);
    this.bottomLeft = this.bottomLeft.add(v);

    return this;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = new Rect(0, 0, 400, 400);
    rect.velocity = new Vector(0, 1);
    const spring = new Vector(100, 0);
    const img = new Image();

    // Load the image
    img.src = '/assets/home/id-card-strategy.webp'; // Replace with your image path

    const loop = () => {
      let force = new Vector(0, 0);
      let torque = 0;

      const translation = rect.velocity.multiply(dt).add(rect.acceleration.multiply(0.5 * dt * dt));
      rect.move(translation.multiply(10));

      force = force.add(new Vector(0, rect.mass * 9.81));
      force = force.add(rect.velocity.multiply(b));

      const springForce = rect.topLeft.subtract(spring).multiply(-1 * stiffness);
      const r = rect.center().subtract(rect.topLeft);
      rect.rxf = r.cross(springForce);

      torque += -1 * rect.rxf;
      force = force.add(springForce);

      const new_acceleration = force.divide(rect.mass);
      const avg_acceleration = rect.acceleration.add(new_acceleration).divide(2);
      const delta_velocity = avg_acceleration.multiply(dt);
      rect.velocity = rect.velocity.add(delta_velocity);

      torque += rect.angular_velocity * angularB;
      rect.angular_acceleration = torque / rect.moment_of_inertia;
      rect.angular_velocity += rect.angular_acceleration * dt;
      const deltaTheta = rect.angular_velocity * dt;
      rect.rotate(deltaTheta);

      draw();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.translate(rect.topLeft.x, rect.topLeft.y);
      ctx.rotate(rect.angle);

      // Draw the image instead of the rectangle
      ctx.drawImage(img, 0, 0, rect.width, rect.height);
      
      ctx.restore();

     
      ctx.beginPath();
      ctx.moveTo(spring.x, spring.y);
    //   ctx.lineTo(rect.topLeft.x, rect.topLeft.y);
      ctx.stroke();
    };

    // Only start animation after image is loaded
    img.onload = () => {
      const intervalId = setInterval(loop, 80);

      return () => {
        clearInterval(intervalId);
      };
    };
  }, []);

  return <canvas ref={canvasRef} width={width} height={height} style={{ border: '1px solid black' }} />;
};

export default CanvasAnimation;
