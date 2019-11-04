package observer3;

import java.util.List;

public interface Subject {
    void addBall(Ball ball);
    void deleteBall(Ball ball);
    void notifyBalls(List<Ball> observerBalls, char keyChar);
    void notifyBalls();
}
