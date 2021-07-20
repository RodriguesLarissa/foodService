package tech.foodservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.foodservice.exception.UserNotFoundException;
import tech.foodservice.models.Users;
import tech.foodservice.repo.FoodRepo;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class FoodService {
    private final FoodRepo foodRepo;

    @Autowired
    public FoodService(FoodRepo foodRepo){
        this.foodRepo = foodRepo;
    }

    public Users updateUsers(Users user){
        return foodRepo.save(user);
    }

    public List<Users> findAllUsers(){
        return foodRepo.findAll();
    }

    public Users findUserById(Long id){
        return foodRepo.findUserById(id)
                .orElseThrow(() -> new UserNotFoundException("User by id " + id + " was not found"));
    }

    public void deleteUsers(Long id){
        foodRepo.deleteUsersById(id);
    }

}
