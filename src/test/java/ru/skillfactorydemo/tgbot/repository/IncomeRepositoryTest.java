package ru.skillfactorydemo.tgbot.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import ru.skillfactorydemo.tgbot.entity.Income;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

/**
 *
 */
@DataJpaTest
class IncomeRepositoryTest {

    @Autowired
    private IncomeRepository incomeRepository;

    @Test
    public void testRepo() {
        for(int i =0; i<10; i++, incomeRepository.save(new Income()));
        final List<Income> found = incomeRepository.findAll();
        assertEquals(12, found.size());
    }

    @Test
    public void testDataScripts() {

        Optional<Income> income = incomeRepository.findById(23356L);
        assertTrue(income.isPresent());
        assertEquals(new BigDecimal("57575.00"),income.get().getIncome());

    }

}