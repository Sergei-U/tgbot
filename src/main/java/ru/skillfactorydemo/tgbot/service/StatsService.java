package ru.skillfactorydemo.tgbot.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.skillfactorydemo.tgbot.entity.Income;
import ru.skillfactorydemo.tgbot.entity.Spend;
import ru.skillfactorydemo.tgbot.repository.IncomeRepository;
import ru.skillfactorydemo.tgbot.repository.SpendRepository;
import ru.skillfactorydemo.tgbot.repository.StatsRepository;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

/**
 *
 */
@Service
@RequiredArgsConstructor
public class StatsService {


    private final StatsRepository statsRepository;
    private final IncomeRepository incomeRepository;
    private final SpendRepository spendRepository;

    public int getCountOfIncomesThatGreater(BigDecimal amount) {
        return statsRepository.getCountOfIncomesThatGreaterThan(amount);
    }

    public int getCountOfIncomesThatGreaterThanLongAmount(Long amount){
        return statsRepository.getCountOfIncomesThatGreaterThanLongAmount(amount);
    }

//    public int getCountOfIncomesThatGreaterThatDate(BigDecimal amount) {
//        return statsRepository.getCountOfIncomesThatGreaterThanAmountDate(amount);
//    }
//    public int getCountOfIncomesThatGreaterThanLongAmountThanDate(Long amount) {
//        return statsRepository.getCountOfIncomesThatGreaterThanLongAmountThanDate(amount);
//    }

    public List<Income> getIncomeGreaterThan (BigDecimal amount) {
        List<Income> incomes = incomeRepository.findAll();
        return incomes
                .stream()
                .filter(income -> income
                        .getIncome()
                        .longValue() > amount.longValue())
                .collect(Collectors.toList());
    }
    public List<Spend> getSpendGreaterThan (BigDecimal amount) {
        List<Spend> spends = spendRepository.findAll();
        return spends
                .stream()
                .filter(income -> income
                        .getSpend()
                        .longValue() > amount.longValue())
                .collect(Collectors.toList());
    }
}
