package backend.controller;

import backend.bean.Member;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class logincontroller {

    @GetMapping(value = "/hello")
    public Member getHello() {

        Member m = new Member();
        m.setId("1");
        m.setName("jason");

        return m; // <--這邊的字串最後會顯示在前端頁面
    }
}
