package observer3;

import java.awt.*;
import java.util.ArrayList;
import java.util.List;

public class GreenBall extends Ball implements Subject{

    private ArrayList<Ball> observerBalls = new ArrayList<>();
    public GreenBall(Color color, int xSpeed, int ySpeed, int ballSize) {
        super(color, xSpeed, ySpeed, ballSize);
    }

    public ArrayList<Ball> getObserverBalls(){
        return this.observerBalls;
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

    @Override
    public void update(Ball ball) {

    }

    @Override
    public void addBall(Ball ball) {
        observerBalls.add(ball);
    }

    @Override
    public void deleteBall(Ball ball) {
        observerBalls.remove(ball);
    }

    @Override
    public void notifyBalls(List<Ball> observerBalls, char keyChar) {

    }

    @Override
    public void notifyBalls() {
        observerBalls.forEach(o->o.update(this));
    }
}
