package tech.foodservice.clients.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.foodservice.clients.models.Users;

import java.util.Optional;

public interface UsersRepo extends JpaRepository<Users, Long> {
    void deleteUsersById(Long id);
    Optional<Users> findUserById(Long id);
}
