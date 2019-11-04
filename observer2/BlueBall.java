package observer2;

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

}
