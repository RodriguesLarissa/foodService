package tech.foodservice.menu.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.foodservice.exception.NotFoundException;
import tech.foodservice.menu.models.Menu;
import tech.foodservice.menu.repo.MenuRepo;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class MenuService {
    private final MenuRepo menuRepo;

    @Autowired
    public MenuService(MenuRepo menuRepo){
        this.menuRepo = menuRepo;
    }

    public Menu updateMenu(Menu menu){
        return menuRepo.save(menu);
    }

    public List<Menu> findAllMenu(){
        return menuRepo.findAll();
    }

    public Menu findMenuById(Long id){
        return menuRepo.findMenuById(id)
                .orElseThrow(() -> new NotFoundException("Menu by id " + id + " was not found"));
    }

    public void deleteMenuById(Long id){
        menuRepo.deleteMenuById(id);
    }
}
