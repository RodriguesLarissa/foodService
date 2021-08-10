package tech.foodservice.menu.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.foodservice.menu.models.Menu;

import java.util.Optional;

public interface MenuRepo extends JpaRepository<Menu, Long>{
    void deleteMenuById(Long id);
    Optional<Menu> findMenuById(Long id);
}
