package observer3;

import java.awt.*;

public class RedBall extends Ball {


    public RedBall(Color color, int xSpeed, int ySpeed, int ballSize) {
        super(color, xSpeed, ySpeed, ballSize);
    }

    @Override
    public void update(char keychar) {
        if(keychar == 'a' || keychar == 'd'){
            int temp = this.getXSpeed();
            this.setXSpeed(this.getYSpeed());
            this.setYSpeed(temp);
        }
    }

    @Override
    public void update(Ball ball) {
        double distance = getDistance(ball);
        if(distance < 120.0){
            this.setX(this.getX() > ball.getX() ? this.getX() + 30 : this.getX() - 30);
            this.setY(this.getY() > ball.getY() ? this.getY() + 30 : this.getY() - 30);
        }
    }
}
