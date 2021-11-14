package ru.demo.tgbot.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import ru.demo.tgbot.entity.Income;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

// аннотация, настраивающая тест на проверку JPA
@DataJpaTest
class IncomeRepositoryTest {

    // делаем заглушку проверяемого репозитория
    @Autowired
    private IncomeRepository incomeRepository;

    @Test
    public void testRepo() {
        // наполняем таблицу некоторыми данными, можно пустыми, это не важно
        //noinspection StatementWithEmptyBody
        for (int i = 0; i < 10; i++, incomeRepository.save(new Income())) ;
        // достаём из базы все записи
        final List<Income> found = incomeRepository.findAll();
        // проверяем, что достали столько же, сколько положили
        assertEquals(12, found.size());
    }

    @Test
    public void testDataScripts() {

        Optional<Income> income = incomeRepository.findById(23356L);
        assertTrue(income.isPresent());

        assertEquals(new BigDecimal("57575.00"), income.get().getIncome());
    }
}
