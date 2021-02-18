package ru.skillfactorydemo.tgbot.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.skillfactorydemo.tgbot.repository.StatsRepository;

import java.math.BigDecimal;

/**
 *
 */
@Service
@RequiredArgsConstructor
public class StatsService {


    private final StatsRepository statsRepository;

    public int getCountOfIncomesThatGreater(BigDecimal amount) {
        return statsRepository.getCountOfIncomesThatGreaterThan(amount);
    }

    public int getCountOfIncomesThatGreaterThanLongAmount(Long amount){
        return statsRepository.getCountOfIncomesThatGreaterThanLongAmount(amount);
    }

    public int getCountOfIncomesThatGreaterThatDate(BigDecimal amount) {
        return statsRepository.getCountOfIncomesThatGreaterThanAmountDate(amount);
    }
    public int getCountOfIncomesThatGreaterThanLongAmountThanDate(Long amount) {
        return statsRepository.getCountOfIncomesThatGreaterThanLongAmountThanDate(amount);
    }
}
