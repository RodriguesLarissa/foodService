package tech.foodservice.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.foodservice.models.Users;

import java.util.Optional;

public interface FoodRepo extends JpaRepository<Users, Long> {
    void deleteUsersById(Long id);
    Optional<Users> findUserById(Long id);
}
