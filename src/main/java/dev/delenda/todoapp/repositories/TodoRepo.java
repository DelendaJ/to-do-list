package dev.delenda.todoapp.repositories;

import dev.delenda.todoapp.model.Todo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepo extends MongoRepository<Todo, String> {

}
