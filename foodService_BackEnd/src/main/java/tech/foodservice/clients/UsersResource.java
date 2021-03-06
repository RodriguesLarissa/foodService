package tech.foodservice.clients;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.foodservice.clients.models.Users;
import tech.foodservice.clients.service.UsersService;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UsersResource {
    private final UsersService usersService;

    public UsersResource(UsersService usersService) {
        this.usersService = usersService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Users>> getAllUsers(){
        List<Users> users = usersService.findAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Users> getUsersById(@PathVariable("id") Long id){
        Users users = usersService.findUserById(id);
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Users> addUsers(@RequestBody Users user){
        Users newUser = usersService.updateUsers(user);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Users> updateUsers(@RequestBody Users user){
        Users updateUser = usersService.updateUsers(user);
        return new ResponseEntity<>(updateUser, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteUsers(@PathVariable("id") Long id){
        usersService.deleteUsersById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

