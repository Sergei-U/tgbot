package ru.demo.tgbot.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import ru.demo.tgbot.entity.Spend;

import java.math.BigDecimal;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

/**
 *
 */
@DataJpaTest
class SpendRepositoryTest {

    @Autowired
    private SpendRepository spendRepository;

    @Test
    public void testSpendData() {
        Optional<Spend> spend = spendRepository.findById(12345L);
        assertTrue(spend.isPresent());
        assertEquals(new BigDecimal("57575.00"), spend.get().getSpend());
    }
}