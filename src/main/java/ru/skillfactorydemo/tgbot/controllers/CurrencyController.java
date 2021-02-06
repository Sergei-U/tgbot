package ru.skillfactorydemo.tgbot.controllers;

import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ru.skillfactorydemo.tgbot.dto.ValuteCursOnDate;
import ru.skillfactorydemo.tgbot.service.CentralRussianBankService;

import javax.xml.datatype.DatatypeConfigurationException;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class CurrencyController {

    private final CentralRussianBankService centralRussianBankService;

    @GetMapping("/getCurrencies")
    @ApiOperation(value = "Курс валют за день")
    public List<ValuteCursOnDate> getValuteCursOnDate() throws Exception {
        return centralRussianBankService.getCurrenciesFromCbr();
    }

    @RequestMapping("/getCurrentValuteOnCode/${code}")
    @ApiOperation(value = "Курс определенной валюты по коду за день")
    public ValuteCursOnDate getCurrentValuteOnCode(@PathVariable String code) throws Exception {
        return centralRussianBankService.getCourseForCurrency(code);
    }
}
