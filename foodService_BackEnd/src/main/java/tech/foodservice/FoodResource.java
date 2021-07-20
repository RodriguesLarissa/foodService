package tech.foodservice;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.foodservice.models.Users;
import tech.foodservice.service.FoodService;

import java.util.List;

@RestController
@RequestMapping("/users")
public class FoodResource {
    private final FoodService foodService;

    public FoodResource(FoodService foodService) {
        this.foodService = foodService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Users>> getAllUsers(){
        List<Users> users = foodService.findAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Users> getUsersById(@PathVariable("id") Long id){
        Users users = foodService.findUserById(id);
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Users> addUsers(@RequestBody Users user){
        Users newUser = foodService.updateUsers(user);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Users> updateUsers(@RequestBody Users user){
        Users updateUser = foodService.updateUsers(user);
        return new ResponseEntity<>(updateUser, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteUsers(@PathVariable("id") Long id){
        foodService.deleteUsers(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

