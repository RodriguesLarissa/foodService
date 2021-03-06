package tech.foodservice.clients.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.foodservice.exception.NotFoundException;
import tech.foodservice.clients.models.Users;
import tech.foodservice.clients.repo.UsersRepo;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class UsersService {
    private final UsersRepo usersRepo;

    @Autowired
    public UsersService(UsersRepo usersRepo){
        this.usersRepo = usersRepo;
    }

    public Users updateUsers(Users user){
        return usersRepo.save(user);
    }

    public List<Users> findAllUsers(){
        return usersRepo.findAll();
    }

    public Users findUserById(Long id){
        return usersRepo.findUserById(id)
                .orElseThrow(() -> new NotFoundException("User by id " + id + " was not found"));
    }

    public void deleteUsersById(Long id){
        usersRepo.deleteUsersById(id);
    }

}
