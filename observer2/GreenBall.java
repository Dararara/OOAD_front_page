package observer2;

import java.awt.*;

public class GreenBall extends Ball{

    public GreenBall(Color color, int xSpeed, int ySpeed, int ballSize) {
        super(color, xSpeed, ySpeed, ballSize);
    }

    @Override
    public void update(char keychar) {
        switch (keychar){
            case 'a':
                this.setXSpeed(this.getXSpeed() > 0 ? -this.getXSpeed() : this.getXSpeed());
                break;
            case 'd':
                this.setXSpeed(this.getXSpeed() > 0 ? this.getXSpeed() : -this.getXSpeed());
                break;
            case 'w':
                this.setYSpeed(this.getYSpeed() > 0 ? -this.getYSpeed() : this.getYSpeed());
                break;
            case 's':
                this.setYSpeed(this.getYSpeed() > 0 ? this.getYSpeed() : -this.getYSpeed());
                break;
        }

    }
}
