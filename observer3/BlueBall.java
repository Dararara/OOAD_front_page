package observer3;

import java.awt.*;

public class BlueBall extends Ball {
    public BlueBall(Color color, int xSpeed, int ySpeed, int ballSize){
        super(color, xSpeed, ySpeed, ballSize);
    }

    @Override
    public void update(char keychar) {
        this.setXSpeed(-this.getXSpeed());
        this.setYSpeed(-this.getYSpeed());
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
